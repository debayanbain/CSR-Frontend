import {
    PreviewComponent,
    Preview,
  } from "@/components/Base/PreviewComponent";
  import { Disclosure } from "@/components/Base/Headless";
  import AdvanceSearchForm from '@/components/AdvanceSearch_Accordion/Forms/Form';
  
  function Accordion() {
    return (
      <>                
            {/* BEGIN: Boxed Accordion */}
            <PreviewComponent className="mb-4">
                    <Preview>
                      <Disclosure.Group variant="boxed">
                        <Disclosure>
                          <Disclosure.Button style={{ background: "linear-gradient(to right, #0063a8 0%, #74bf44 100%)" , color: "white" }}>
                            Advance Search
                          </Disclosure.Button>
                          <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                            <AdvanceSearchForm />
                          </Disclosure.Panel>
                        </Disclosure>
                  
                      </Disclosure.Group>
                    </Preview>
            </PreviewComponent>
            {/* END: Boxed Accordion */}
      </>
    );
  }
  
  export default Accordion;
  