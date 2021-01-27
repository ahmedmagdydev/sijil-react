import React from "react";
import { useTranslation } from "react-i18next";

function History() {
  const { t } = useTranslation();
  return (
    <>
      <h4>{t("profileScreen.History")}</h4>
      <ul className="mt-5 list-unstyled">
        {Array.from({ length: 6 }).map((item, index) => {
          return (
            <li
              key={index}
              className="d-flex justify-content-between"
              style={{
                borderBottom: "1px solid #d0d8e5",
                paddingBottom: "10px",
                marginBottom: "10px",
              }}
            >
              <div>Actor Added your profile</div>
              <div className="text-black-50">10 may 2014 at 12:00 PM</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default History;
