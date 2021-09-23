export default function formatDate(rawDate) {
    const newDate = new Date(rawDate).toDateString();
    return newDate;
}
