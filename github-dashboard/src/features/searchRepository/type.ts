export type Repository = {
    full_name: string;
    owner: {
        login: string;
    }
    stargazers_count: number;
    html_url: string;
}

export type GitHubSearchRepositoriesResponse = {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}

export type SearchInputProps = {
    onSearch: (input: string) => void;
    value: string;
    onChange: (input: string) => void;
}

export type RepositoryListProps = {
    items: Repository[];
};