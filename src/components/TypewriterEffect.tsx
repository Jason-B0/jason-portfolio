import { useState, useEffect } from 'react';

const DEFAULT_TYPING_SPEED = 6; // measured in ms

interface TypewriterEffectProps {
	content: string;
	speed?: number;
	isHtml?: boolean;
	className?: string;
	onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
	content,
	speed = DEFAULT_TYPING_SPEED,
	isHtml = false,
	className = "",
	onComplete
}) => {
	const [displayText, setDisplayText] = useState('');
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		if (!content || !isTyping) return;

		if (displayText.length < content.length) {
			const timeout = setTimeout(() => {
				setDisplayText(content.slice(0, displayText.length + 1));
			}, speed);

			return () => clearTimeout(timeout);
		} else {
			setIsTyping(false);
			if (onComplete) onComplete();
		}
	}, [content, displayText, isTyping, speed, onComplete]);

	if (isHtml) {
		return (
			<p
				className={className}
				dangerouslySetInnerHTML={{
					__html: displayText + (isTyping ? '<span class="typing-cursor">|</span>' : '')
				}}
			/>
		);
	}

	return (
		<p className={className}>
			{displayText}
			{isTyping && <span className="typing-cursor">|</span>}
		</p>
	);
};

export default TypewriterEffect;
