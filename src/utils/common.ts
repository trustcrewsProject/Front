export function makeBadgeSize(size: string) {
    // 사이즈
    let textSize;
    let px;
    let py;
    switch (size) {
        case 'xs':
            textSize = 'text-xs';
            px = 'px-2';
            py = 'py-1';
            break;
        case 'sm':
            textSize = 'tablet:text-sm mobile:text-xs';
            px = 'px-2';
            py = 'py-1';
            break;
        case 'md':
            textSize = 'tablet:text-lg mobile:text-md';
            px = 'tablet:px-8 mobile:px-4';
            py = 'tablet:py-4 mobile:py-2';
            break;
        case 'lg':
            textSize = 'text-lg';
            px = 'px-8';
            py = 'py-4';
            break;
        default:
            textSize = 'tablet:text-md mobile:text-sm';
            px = 'px-4';
            py = 'tablet:py-2 mobile:py-1';
    }

    return {textSize, px, py};
}

export function makeBadgeColor(color: string) {
    let bgColor;
    let textColor;
    let ringColor;
    switch (color) {
        case 'red':
            bgColor = 'bg-red-50';
            textColor = 'text-red-700';
            ringColor = 'ring-red-600/10';
            break;
        case 'yellow':
            bgColor = 'bg-yellow-50';
            textColor = 'text-yellow-800';
            ringColor = 'ring-yellow-600/20';
            break;
        case 'green':
            bgColor = 'bg-green-50';
            textColor = 'text-green-700';
            ringColor = 'ring-green-600/20';
            break;
        default:
            // todo - error 던지기?
            bgColor = 'bg-red-50';
            textColor = 'text-red-700';
            ringColor = 'ring-red-600/10';
            break;
    }

    return {bgColor, textColor, ringColor};
}