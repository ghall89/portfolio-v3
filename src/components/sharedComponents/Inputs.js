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

const Button = ({ onClick, children, className }) => (
	<button
		className={`transition-all m-2 bg-sky-400 rounded-md px-6 py-2 text-white hover:bg-sky-300 active:bg-sky-500 ${className}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export { Button, TextInput, TextField };
