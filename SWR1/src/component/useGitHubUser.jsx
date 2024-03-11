import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGitHubUser({ username }) {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

    return {
        user: data,
        error: error,
        isLoading: !data && !error,
    };
}

export default useGitHubUser;