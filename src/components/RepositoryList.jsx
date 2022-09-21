import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/allanrodriguesmachado/NlweSports"
}


export function RespositoryList() {
    return (
        <section className="repositoy-list">
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem 
                    repository={repository}
                    />
                <RepositoryItem 
                    repository={repository}
                    />
            </ul>

        </section>
    );
}