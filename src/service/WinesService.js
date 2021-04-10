export const baseUrl = 'https://wines-api.herokuapp.com';

export function fetchRegions() {
    const requestUrl = `${baseUrl}/api/regions`;
    return fetch(requestUrl).then(res => res.json());
}

export function fetchWinesFrom(region) {
    const requestUrl = `${baseUrl}/api/wines?region=${region}`;
    return fetch(requestUrl).then(res => res.json());
}

export function fetchSelectedWine(wine) {
    const requestUrl = `${baseUrl}/api/wines/${wine}`;
    return fetch(requestUrl).then(res=> res.json());
}