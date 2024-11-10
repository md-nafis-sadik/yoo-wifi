import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

const PackageAccordion = ({ data }) => {
    return (
        <section className='containerX'>
            <div className='sec_common_80 !px-0'>
                <div className='px-10 py-15 border border-main-200 rounded-2xl'>

                    <div className='flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4'>
                        <h2 className='text-[28p] md:text-5xl text-black-900 font-bold leading-[110%]'>
                            {data.name}
                        </h2>

                        <h2 className='text-[28p] md:text-5xl text-main-600 font-bold leading-[110%]'>
                            ${data.priceStart} - ${data.priceEnd}
                        </h2>
                    </div>

                    <div>
                        <Accordion type="multiple" collapsible>
                            {data.details.map((item, index) => (<div key={index}>
                                <AccordionItem value={`item-${index + 1}`} className="!bg-white !border-0">
                                    <AccordionTrigger className="!p-0 !text-2xl !font-bold text-black-700" iconCls="!text-main-600">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="!mt-6">
                                        {item.info}
                                    </AccordionContent>
                                </AccordionItem>

                                {index !== data.details.length - 1 && (
                                    <div className='border border-b border-[#BDBDBD] my-10'></div>
                                )}
                            </div>
                            ))}

                        </Accordion>
                    </div>

                    <div className='flex justify-end mt-15'>
                        <Button className="w-[183px] h-[51px] !text-base">
                            Next
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PackageAccordion;