import clsx from "clsx";
type Props = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  loading?: boolean;
};

const Switch = ({ enabled, onChange, loading }: Props) => {
  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-300 ${
        enabled ? "bg-primary-main" : "bg-gray-300"
      }`}
    >
      <div
        className={clsx(
          "absolute left-0 size-5 flex justify-center items-center transform rounded-full text-white transition-transform duration-300",
          {
            "translate-x-5 bg-primary-dark text-success": enabled,
            "translate-x-0 bg-gray-700": !enabled,
          },
        )}
      />
    </button>
  );
};

export default Switch;
