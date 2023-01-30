import { Form, Input, Button ,IconSearch} from "./NoticesSearch.styled";
// import { useSelector, useDispatch } from "react-redux";
// import { selectSearch } from "redux/search/search-selectors";
// import { setSearch } from "redux/search/search-slice";

const NoticesSearch = () => {
    // const search = useSelector(selectSearch);
    // const dispatch = useDispatch();

    // const handleChange = e => setSearch(e.currentTarget.value.toLowerCase());  

    // const handleSubmit = e => {
    //     const { value } = e.target;
    //     dispatch(setSearch(value));
    // }

    
    return (
        <Form
            // onSubmit={handleSubmit}
        >
                <Input
                    type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search"
                // onChange={handleChange}
                // value={search}
                />
                <Button type="submit">
                    <IconSearch size={24}  />
                </Button>
            </Form>
    )
}

export default NoticesSearch;