export function BurguerMenu({isOpen,setIsOpen}){
    return(
        <button className="block lg:hidden ml-auto" type="button" onClick={setIsOpen}>
            <span className="">         
                <span className=""></span>
            </span>     
        </button>
    )
}


{/* <button 
className="text-white md:hidden" 
onClick={toggleMenu}
>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
</svg>
</button> */}