import React, {useEffect} from 'react';
import {userSlice} from "../../store/reducers/userSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUsers} from "../../store/reducers/actionCreators";
import PostContainer from "../PostContainer";
import PostContainer2 from "../PostContainer2";

const App = () => {
    // const dispatch = useAppDispatch()
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, []);
    //
    
    return (
        <div>
            {/*{isLoading && <h1>Идет загрузка</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}

            <div style={{display: 'flex'}}>
                <PostContainer/>
                <PostContainer2/>
            </div>
        </div>
    );
};

export default App;
