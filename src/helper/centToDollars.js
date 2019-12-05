export default function centToDollars(cent) {
    const dollars = cent / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}