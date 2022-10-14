import Link from "next/link";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.scss";

export type PostData = {
  date: string;
  title: string;
  id: string;
};

export default function Post({ id, title, date }: PostData) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
}
