import css from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.tableValue}>{type}</td>
      <td className={css.tableValue}>{amount}</td>
      <td className={css.tableValue}>{currency}</td>
    </>
  );
}
