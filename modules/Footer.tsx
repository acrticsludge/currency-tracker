export default function Footer() {
  return (
    <footer className="text-center p-4 bg-gray-200 border-t-2 border-gray-300 text-gray-800 font-sans relative bottom-0 w-full">
      <p>© {new Date().getFullYear()} Anubhav Rai</p>
      <p>
        Check out my GitHub:{" "}
        <a
          href="https://github.com/acrticsludge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 no-underline"
        >
          acrticsudge
        </a>
      </p>
    </footer>
  );
}
