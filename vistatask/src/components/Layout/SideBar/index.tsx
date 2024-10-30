const SideBar: React.FC = (): JSX.Element =>{

    // const {isClicked,setIsClicked} = useContext(AppContext);

    // const ref = useRef<any>();

    // const location = useLocation(); 
    // const currentPath = location.pathname;

    // const navigate = useNavigate();
    // const loginNavigate = useNavigate();

    // const handleBurgerButton = ()=>{
        
    //     setIsClicked(false);
    //     const mobileNavBar = document.querySelector('.mobileNav');
    //     mobileNavBar?.classList.toggle('-top-96')
    //     mobileNavBar?.classList.toggle('top-0')

    // }

    // const handleSideBarLogoClick = ()=>{
    //     setIsClicked(false);
    //     navigate('/') ;
    // }

    // const handleLoginButton = ()=>{
    //     loginNavigate('/login')
    // }

    // useEffect(()=>{
    //     console.log('is Clicked: ' , isClicked);
    //     console.log('token' , getTokenFromStorage('token'))
    // },[isClicked])

  return <div className="sideBar flex flex-col gap-3 bg-white text-black h-full w-30">

        <header className="sideBarHeader w-full h-16 flex justify-center items-center gap-1">
            <img src="https://img.icons8.com/?size=100&id=HzfMBDFej7au&format=png&color=000000" alt="logoIcon" width={"40px"}/>
            <h1 className="headerTitle"> avoburger </h1>
        </header>

        {/* <ul className="SideBarButtonsList font-bold lg:font-semibold hidden w-2/5 md:flex justify-between xl:px-2">
            {ButtonsData.map((item,index)=>{
                return <li key={index}> <SideBarButton isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo} onClickProp={()=>{setIsClicked(false)}} /> </li>
            })}
        </ul> */}

    </div>
}

export default SideBar