export const currencyFormater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
export const rupiahFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
});

export function usdToIdr(usd) {
    return usd * 16000;
}
// 👉 Rp 157.000

