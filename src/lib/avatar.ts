export const isValidUrl = (str: string | undefined | null): boolean => {
    if (!str || !str.trim()) return false;
    return str.startsWith('http://') || str.startsWith('https://');
};

export interface AvatarOptions {
    background?: string;
    color?: string;
    size?: number;
    bold?: boolean;
}

/**
 * Resolves an avatar URL from a list of potential candidates or generates a fallback initials avatar.
 *
 * @param name The name to use for initials if a fallback is needed
 * @param urls A list of potential URLs to check (e.g., [user.avatar, user.image])
 * @param options Styling options for the fallback avatar
 * @returns A valid image URL
 */
export const getAvatarUrl = (
    name: string,
    urls: (string | undefined | null)[] = [],
    options: AvatarOptions = {}
): string => {
    // Try to find the first valid custom URL
    const validUrl = urls.find(isValidUrl);
    if (validUrl) return validUrl as string;

    // Fallback to UI Avatars
    const {
        background = 'F4F4F5', // Default light gray background
        color = '1E293B', // Default slate-800 text
        bold = true,
    } = options;

    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=${background}&color=${color}&font-size=0.33&bold=${bold}&format=svg`;
};
