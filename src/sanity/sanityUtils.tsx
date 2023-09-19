import { useSanityClient, groq } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient())

export function urlForImage(source) {
    return imageBuilder.image(source)
}

export function timeAgoString(seconds) {
    if (seconds < 60) {
        return "just now";
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (seconds < 86400 * 30) {
        const days = Math.floor(seconds / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (seconds < 86400 * 30 * 12) {
        const months = Math.floor(seconds / (86400 * 30));
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.floor(seconds / (86400 * 30 * 12));
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}