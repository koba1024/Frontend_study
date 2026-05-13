import { useQuery } from "@tanstack/react-query";
import type { GitHubSearchRepositoriesResponse } from "../type";

const searchRepositories = async (keyword: string): Promise<GitHubSearchRepositoriesResponse> => {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}+in:name&sort=stars&order=desc&per_page=30`;
    const response = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json",
        },
    });

    if (!response.ok) {
        throw new Error("リポジトリの取得に失敗しました");
    }

    return response.json();
};



export default function useSearchRepositories(keyword: string) {
    return useQuery({
        queryKey: ["repositories", keyword],
        queryFn: () => searchRepositories(keyword),
        enabled: keyword.trim() !== "",
    })
}