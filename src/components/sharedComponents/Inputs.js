const TextInput = ({ name, label }) => (
	<div className="m-2">
		{label ? (
			<label htmlFor={name} className="pr-2">
				{label}
			</label>
		) : null}
		<input
			className="border p-2 bg-gray-50 rounded w-full"
			type="text"
			name={name}
		/>
	</div>
);

const TextField = ({ name }) => (
	<textarea
		className="border p-2 bg-gray-50 rounded w-full m-2"
		name={name}
		resize="none"
		rows={10}
	/>
);

const Button = ({ onClick, children, className, disabled }) => (
	<button
		className={`transition-all m-2 drop-shadow-lg bg-gradient-to-b from-sky-700 to-indigo-500 rounded-md px-6 py-2 text-white bg-gradient-to-r enabled:hover:from-sky-600 enabled:hover:to-indigo-400 disabled:opacity-10 ${className}`}
		onClick={onClick}
		disabled={disabled ? disabled : false}
	>
		{children}
	</button>
);

export { Button, TextInput, TextField };
