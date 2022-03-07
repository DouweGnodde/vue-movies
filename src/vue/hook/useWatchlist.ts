import WatchListContext from "../../types/WatchListContext";
import { inject } from "vue";

export default function useWatchlist(): WatchListContext {
    const context = inject<WatchListContext>('watchListContext');

    if (!context) {
        throw new Error('No watchlist context found');
    }

    return context;
}