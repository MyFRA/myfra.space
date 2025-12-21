export const DateUtil = {
    formatDateStringToDmY: (dateString: string) => {
        const dateObj = new Date(dateString)

        return dateObj.toLocaleString('en-us', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        })
    },
}
