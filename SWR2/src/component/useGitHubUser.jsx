import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser({ username }) {
    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);
    return {
        user: data,
        error: error,
        isLoading: username && !data && !error,
    };
}

export default useGitHubUser;