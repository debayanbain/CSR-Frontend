import _ from "lodash";
import clsx from "clsx";
import { useState, useRef, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  OverlayView,
  Marker,
  useGoogleMap,
  InfoWindow,
} from "@react-google-maps/api";
import ActionSection from "./action";
import PlotData from "./plotData";
import Layer from "./layer";
import RangeSlider from "@/components/Base/RangeSlider";
import Survey from "./survey";
import { polygonCoordinates } from "@/dummyData";
import Lucide from "@/components/Base/Lucide";
import Button from "@/components/Base/Button";

const center = {
  lat: polygonCoordinates["lat"],
  lng: polygonCoordinates["lng"],
};

function Main() {
  const mapContainerRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDqIpkpWPHjYBdK8CE7G5qOwbY4NlWnfkM",
  });
  const googleMap = useRef(null);
  const [currentZoom, setCurrentZoom] = useState(0);
  const [fillOpacity, setFillOpacity] = useState(0.8);
  const [hoveredPolygon, setHoveredPolygon] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const [mapClickedPosition, setMapClickedPosition] = useState({});
  const [isPlotDataVisible, setIsPlotDataVisible] = useState(false);

  const onLoad = useCallback((map) => {
    map.setZoom(18);
    googleMap.current = map;
    setCurrentZoom(map.getZoom());
  }, []);

  const convertCoordinates = (inputCoordinates: number[][] | [any, any][]) => {
    return inputCoordinates.map(([lng, lat]) => ({ lat, lng }));
  };

  const handleMouseOver = (key) => {
    setHoveredPolygon(key);
  };

  const handleMouseOut = () => {
    setHoveredPolygon(null);
  };

  const handlePolygonClick = (e, key) => {
    setSelectedPolygon(key);
    setMapClickedPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const handleZoomChanged = () => {
    if (googleMap.current) {
      setCurrentZoom(googleMap.current.getZoom());
    }
  };

  const tooglePlotData = () => {
    setSelectedPolygon(null);
    setIsPlotDataVisible((prevPlotDataOpened) => !prevPlotDataOpened);
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={{
          height: "100vh",
        }}
        center={center}
        zoom={19}
        onLoad={onLoad}
        mapTypeId="satellite"
        tilt={0}
        ref={mapContainerRef}
        onZoomChanged={() => handleZoomChanged(mapContainerRef.current)}
      >
        <div className="flex justify-center">
          <RangeSlider
            min={0}
            max={1}
            step={0.0001}
            className="absolute left-[10] top-[10] block bottom-10 z-[1000] w-100 "
            value={fillOpacity}
            onChange={(e) => setFillOpacity(e.target.value)}
          />
        </div>
        <ActionSection />
        <div className={`${isPlotDataVisible ? "block" : "hidden"}`}>
          <PlotData makeDisplay={`${isPlotDataVisible ? true : false}`} />
        </div>
        {polygonCoordinates["type"] === "Polygon" &&
          polygonCoordinates["data"]["features"].map((feature, key) => (
            <>
              <Polygon
                key={feature["properties"]["plot_id"]}
                path={convertCoordinates(feature["geometry"]["coordinates"][0])}
                options={{
                  fillColor: feature["properties"]["color"],
                  fillOpacity: fillOpacity,
                  strokeColor: "#000000",
                  strokeOpacity: 1,
                  strokeWeight: hoveredPolygon === key ? 2 : 1,
                }}
                onMouseOver={() => handleMouseOver(key)}
                onMouseOut={handleMouseOut}
                onClick={(e) => handlePolygonClick(e, key)}
              />
              {feature["properties"]["showlabel"] == 1 && currentZoom >= 16 && (
                <>
                  <Marker
                    position={{
                      lat: parseFloat(feature["properties"]["lat"]),
                      lng: parseFloat(feature["properties"]["lng"]),
                    }}
                    label={{
                      text: String(feature["properties"]["plot_id"]),
                      color: "white",
                      className: "m-1 bg-blue-500 rounded p-1",
                      fontSize: "12px",
                    }}
                    icon={{
                      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                      scale: 0,
                    }}
                  />
                </>
              )}
              {selectedPolygon === key && (
                <InfoWindow
                  position={mapClickedPosition}
                  onCloseClick={() => setSelectedPolygon(null)}
                >
                  <div className="bg-blue-800 rounded-lg shadow-md px-3 py-1">
                    <div className="flex justify-between items-center text-white mr-5">
                      <h5 className="text-lg font-semibold">
                        Plot # {feature["properties"]["plot_id"]}
                      </h5>
                    </div>
                    <p className="text-sm text-white mb-1">
                      {feature["properties"]["village_name"]}
                    </p>
                    <Button
                      size="sm"
                      variant="dark"
                      onClick={tooglePlotData}
                      className="bg-blue-600 text-white"
                    >
                      Load more
                    </Button>
                  </div>
                </InfoWindow>
              )}
            </>
          ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Main;
