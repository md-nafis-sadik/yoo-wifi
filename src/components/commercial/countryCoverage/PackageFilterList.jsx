import InternetPackageCard from '@/components/shared/cards/InternetPackageCard';
import SectionHeader from '@/components/shared/others/SectionHeader';
import { Checkbox } from '@/components/ui/checkbox';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { HorizontalLineIcon } from '@/services';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PackageFilterList = () => {

    const { packages } = useSelector(state => state.country);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Reset the current page whenever the filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedRegions, selectedCountries, selectedProduct, selectedPlan, searchText]);

    // Filter packages based on searchText, selectedRegions, selectedCountries, selectedProduct, and selectedPlan
    const filteredPackages = packages.filter((pkg) => {

        // Check if any filter is active
        const isAnyFilterActive = selectedRegions.length > 0 || selectedCountries.length > 0 || selectedProduct.length > 0 || selectedPlan.length > 0 || searchText !== '';
        if (!isAnyFilterActive)
            return true;

        // At least one filter is active, apply all filters
        const matchesSearchText = searchText === '' || pkg.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(pkg.region);
        const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(pkg.country);
        const matchesProduct = selectedProduct.length === 0 || selectedProduct.includes(pkg.type);
        const matchesPlan = selectedPlan.length === 0 || selectedPlan.includes(pkg.plan);

        // Return true only if all active filter conditions are met
        return matchesSearchText && matchesRegion && matchesCountry && matchesProduct && matchesPlan;
    });

    // Paginate the packages
    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedPackages = filteredPackages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="containerX">
            <div className='sec_common_80 xl:!px-0'>

                <SectionHeader
                    heading='Country Coverage'
                    subHeading='Roam the world with confidence! Stay connected and data-ready, anytime, anywhere!'
                />

                <div className='flex gap-8 mt-10'>
                    <FilterSidebar
                        className="w-[304px]"
                        selectedRegions={selectedRegions} setSelectedRegions={setSelectedRegions}
                        selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}
                        selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
                        selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}
                        searchText={searchText} setSearchText={setSearchText}
                    />

                    <div className='flex-1 '>
                        <div className='grid grid-cols-2 gap-x-5 gap-y-4 h-max'>
                            {paginatedPackages.map((data, index) => (
                                <InternetPackageCard
                                    key={index}
                                    data={data}
                                    type={2}
                                />
                            ))}
                        </div>

                        <div className="mt-8  w-full">
                            <Pagination className="flex justify-end">
                                <PaginationPrevious
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className="mx-2"
                                    disabled={currentPage === 1}
                                />
                                <PaginationContent>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                isActive={currentPage === i + 1}
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                </PaginationContent>
                                <PaginationNext
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className="mx-2"
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default PackageFilterList;

// filter sidebar component
const FilterSidebar = ({
    className, selectedRegions, setSelectedRegions, selectedCountries, setSelectedCountries, selectedProduct, setSelectedProduct, selectedPlan, setSelectedPlan, searchText, setSearchText
}) => {

    const { regionList, countries } = useSelector(state => state.country);

    const [isRegionListOpen, setIsRegionListOpen] = useState(true);
    const [isCountryListOpen, setIsCountryListOpen] = useState(true);
    const [isProductListOpen, setIsProductListOpen] = useState(true);
    const [isPlanTypeListOpen, setIsPlanTypeListOpen] = useState(true);

    const [totalCountryShow, setTotalCountryShow] = useState(5);

    return (
        <div className={cn('p-6 border border-neutral-200 rounded-2xl', className)}>
            <h4 className='text-black-900 text-[28px] font-extrabold leading-[120%]'>
                Filters
            </h4>

            <div className='my-8'>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Search anything...'
                    className='w-full p-4 rounded-xl border border-neutral-300 outline-none bg-neutral-100 placeholder:text-black-600 text-black-900'
                />
            </div>

            <div className='flex flex-col gap-12'>

                <FilterList
                    title="Region"
                    isOpen={isRegionListOpen}
                    setIsOpen={setIsRegionListOpen}
                    datas={regionList}
                    selected={selectedRegions}
                    setSelected={setSelectedRegions}
                />

                <FilterList
                    title="Country"
                    isOpen={isCountryListOpen}
                    setIsOpen={setIsCountryListOpen}
                    datas={countries}
                    selected={selectedCountries}
                    setSelected={setSelectedCountries}
                    activeIsMoreButton={true}
                    totalDataShow={totalCountryShow}
                    setTotalDataShow={setTotalCountryShow}
                />

                <FilterList
                    title="Products"
                    isOpen={isProductListOpen}
                    setIsOpen={setIsProductListOpen}
                    datas={[
                        { _id: 1, name: 'Pocket Wifi', value: 'pocket-wifi' },
                        { _id: 2, name: 'Sim', value: 'sim' },
                        { _id: 3, name: 'eSim', value: 'esim' },
                    ]}
                    selected={selectedProduct}
                    setSelected={setSelectedProduct}
                />

                <FilterList
                    title="Plan Type"
                    isOpen={isPlanTypeListOpen}
                    setIsOpen={setIsPlanTypeListOpen}
                    datas={[
                        { _id: 1, name: '5GB 7 days', value: '5gb-7days' },
                        { _id: 2, name: '10GB 10 days', value: '10gb-10days' },
                        { _id: 3, name: '15GB 15 days', value: '15gb-15days' },
                        { _id: 4, name: '20GB 20 days', value: '20gb-20days' },
                        { _id: 5, name: 'BASIC Daypass', value: 'basic-daypass' },
                    ]}
                    selected={selectedPlan}
                    setSelected={setSelectedPlan}
                />
            </div>
        </div>
    )
}

// FilterList component for re-using
const FilterList = ({
    isOpen, setIsOpen, datas, title, selected, setSelected, key = "value", activeIsMoreButton = false, totalDataShow, setTotalDataShow,
}) => {

    // Toggle list
    const toggle = (paramName, setSelected) => {
        setSelected((prevSelected) =>
            prevSelected.includes(paramName)
                ? prevSelected.filter((name) => name !== paramName)
                : [...prevSelected, paramName]
        );
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-4'>
                <p className='text-black-900 text-[18px] leading-[140%] font-semibold'>
                    {title}:
                </p>

                <button onClick={() => setIsOpen(!isOpen)}>
                    <HorizontalLineIcon />
                </button>

            </div>

            <div className='border-b border-[#EEE]'></div>

            <ul className={cn(
                "space-y-4 transition-all duration-300 ",
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            )}>
                {datas.slice(0, totalDataShow).map((data, index) => (
                    <li key={index} className="text-black-700 flex gap-2 items-center">
                        <Checkbox
                            type="checkbox"
                            checked={selected.includes(data[key])}
                            onCheckedChange={() => toggle(data[key], setSelected)}
                        />
                        <span onClick={() => toggle(data[key], setSelected)} className='cursor-pointer '>
                            {data.name}
                        </span>
                    </li>
                ))}
            </ul>

            {/* more button */}
            {(activeIsMoreButton && (datas.length > totalDataShow) && isOpen) && (
                <button
                    className={cn(
                        'px-6 py-3 border border-black-900 rounded-xl w-max text-sm font-medium',
                        isOpen ? 'opacity-100' : 'opacity-0'
                    )}
                    onClick={() => setTotalDataShow((prev) => prev + 5)}
                >
                    More
                </button>
            )}
        </div>
    )
}