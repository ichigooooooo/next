export default function layout({children}: any) {
    return (
        <>

        <div className= "flex">
            <a href="/Profilee/contact">Contact</a>
            <a href="/Profilee/aboutme">AboutMet</a>
        </div>
        {children}
        </>
    )
}
