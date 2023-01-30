import NoticesSearch from "components/Notices/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "components/Notices/NoticesCategoriesList/NoticesCategoriesList";
import Headline from "components/Headline/Headline";
import AddNoticeButton from "components/Notices/ AddNoticeButton/ AddNoticeButton";

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectError, selectIsLoading, selectSellPets } from "redux/notices/notices-selectors";
// import { fetchSellPets } from "redux/notices/notices-operation";


const NoticesPage = () => {

    // const sellPets = useSelector(selectSellPets);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
    // const dispatch = useDispatch();

    // useEffect(() => {
    // dispatch(fetchSellPets())
    // }, [dispatch]);
    

    //  const [searchParams, setSearchParams] = useSearchParams();

    // const query = searchParams.get('query') ?? '';
    // useEffect(() => {
    //     const fetchSellPetc = async () => {
    //         setLoading(true);
    //         try {
    //             setStatus(Status.PENDING);
    //             const data = await getSellPets();
    //             setStatus(Status.RESOLVED);
    //             setSellPets(data.results)
    //         } catch (error) {
    //             console.log(error);
    //             setStatus(Status.REJECTED);
    //         } finally {
    //             setLoading(false);
    //   }
    //     }
    //     fetchSellPetc();
    // }, [setSellPets])
    
    //  const fetchQueryPets = async () => {
    //         setLoading(true);

    //         try {
    //             setStatus(Status.PENDING);
    //             const data = await getSearchPets(query);
    //             setStatus(Status.RESOLVED);
    //             setPets(data.results)
            
    //         } catch (error) {
    //             console.log(error);
    //             setStatus(Status.REJECTED);
    //         }
    //  }
    
    //  const onFormSubmit = (searchQuery) => {
    //     setSearchParams({query: searchQuery });
    //     setPets([]);
    //   }
    
    return (
        <div>
        
            <Headline title={"Find your favorite pet"}></Headline>
            <NoticesSearch
                // onSubmit={onFormSubmit}
            />
            <div style={{display:"flex", alignItems:"center", marginBottom:"60px" }}>
                <NoticesCategoriesNav />
                <AddNoticeButton />
            </div>
            <NoticesCategoriesList/>
            {/* {sellPets?.length === 0 && !isLoading && <p>Sell list is empty! Try to add pet</p>} 
            {sellPets?.length > 0 && <NoticesCategoriesList/>}
            {error && <p>Ooops... Something went wrong</p>}             */}
        </div>
    )
}

export default NoticesPage;