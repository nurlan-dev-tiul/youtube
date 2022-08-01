//! Форматируем число к примеру в такое 1000 подписчиков => 1k подписчиков

export const formatNumber = (num: number) => {
    if(num >= 1000000000){
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'; //! 1G
    }
    if(num >= 1000000){
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; //! 1M
    }
    if(num >= 1000){
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; //! //! 1K
    }

    return num;
} 