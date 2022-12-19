import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5192c883615227dbdfbb43920478ff52~c5_100x100.jpeg?x-expires=1671591600&x-signature=YvkkV9NgOC%2BcQcTk0UzgYtUeh5c%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van B</span>

          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>NguyenB@@ </span>
      </div>
    </div>
  );
}

export default AccountItem;
