export const getDate = (createdAt:any) => {
    const newdate = new Date(createdAt)
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    return `${yyyy}-${mm}-${dd}`
}