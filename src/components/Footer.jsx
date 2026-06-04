function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="foota">
            <p>
                &copy; {year} Savanna Coffee House 
            </p>
        </footer>
    )
}

export default Footer