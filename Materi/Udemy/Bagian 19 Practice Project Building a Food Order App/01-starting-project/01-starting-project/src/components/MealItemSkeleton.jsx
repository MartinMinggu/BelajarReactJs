export default function MealItemSkeleton() {
  return (
    <li className="meal-item skeleton">
      <article>
        <div className="img-skeleton"></div>

        <div className="content">
          <div className="line title"></div>
          <div >Tunggu</div>
          <div >Sedang memuat..</div>
        </div>

        <div className="actions">
          <div className="button-skeleton"></div>
        </div>
      </article>
    </li>
  );
}
