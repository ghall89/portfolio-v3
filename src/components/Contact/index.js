import { Button, TextInput, TextField } from '../sharedComponents/Inputs';

const Contact = () => {
	const handleClick = event => {
		event.preventDefault();
		console.log('Clicked!');
	};

	return (
		<div>
			<form action="submit">
				<div className="grid grid-cols 1 md:grid-cols-2 gap-2">
					<div>
						<TextInput name="name-input" label="Name" />
					</div>
					<div>
						<TextInput name="email-input" label="Email" />
					</div>
				</div>
				<TextField name="message-input" />
				<Button className="w-full" onClick={event => handleClick(event)}>
					Send
				</Button>
			</form>
		</div>
	);
};

export default Contact;
