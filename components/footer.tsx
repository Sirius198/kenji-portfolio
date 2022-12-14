export default function Footer() {
  return (
    <footer
      className="overflow-hidden rounded-b-2xl"
      style={{ background: "transparent" }}
    >
      <p className="text-center py-6 text-gray-lite  dark:text-color-910">
        © 2022 All Rights Reserved by{" "}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>
        .
      </p>
    </footer>
  );
}
