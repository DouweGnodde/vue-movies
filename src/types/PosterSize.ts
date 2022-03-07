const posterSizes = [
    'w92',
    'w154',
    'w185',
    'w342',
    'w500',
    'w780',
    'original',
] as const;

type PosterSize = typeof posterSizes[number];

export default PosterSize;