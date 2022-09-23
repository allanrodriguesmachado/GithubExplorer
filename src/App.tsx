import { RespositoryList } from "./components/RepositoryList";

import './styles/global.scss'

//https://api.github.com/orgs/rocketseat/repos

export function App() {
    return (
       <>
        <RespositoryList />
       </>
    )
}