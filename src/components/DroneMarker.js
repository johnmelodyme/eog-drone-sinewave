import React from 'react';

const calcFill = (temp) => {
	const maxTemp = 330;
	const minTemp = 220;

	const percentOfMax = (temp - minTemp) / (maxTemp - minTemp);
	console.log(temp - minTemp);
	console.log(maxTemp - minTemp);
	console.log(percentOfMax);
	// Calculate the "redness of the fill";
	return 255 * percentOfMax;
};

const DroneMarker = ({ temp = 0 }) => {
	return (
		<div
			style={{
				width: 25,
				height: 25,
			}}
		>
			<svg
				viewBox="0 0 470.606 470.606"
				fill={`rgba(${calcFill(temp)}, 0, 0, 1)`}
			>
				<path d="M111.25 222.803c12.77 0 25.305-2.154 37.259-6.403 3.903-1.387 5.942-5.676 4.556-9.579-1.388-3.903-5.678-5.94-9.579-4.555-10.337 3.674-21.183 5.537-32.235 5.537-53.072 0-96.25-43.178-96.25-96.25s43.178-96.25 96.25-96.25 96.25 43.178 96.25 96.25c0 10.754-1.765 21.32-5.244 31.404-1.352 3.916.728 8.185 4.644 9.536 3.914 1.35 8.186-.728 9.536-4.644 4.024-11.662 6.064-23.874 6.064-36.297 0-61.343-49.906-111.25-111.25-111.25S0 50.209 0 111.553s49.906 111.25 111.25 111.25zM207.314 317.675c-3.909 1.37-5.968 5.648-4.599 9.558 3.576 10.211 5.39 20.917 5.39 31.82 0 53.072-43.178 96.25-96.25 96.25s-96.25-43.178-96.25-96.25 43.178-96.25 96.25-96.25c10.9 0 21.605 1.813 31.82 5.39 3.912 1.369 8.188-.69 9.557-4.6 1.369-3.909-.69-8.188-4.6-9.557-11.812-4.136-24.185-6.233-36.777-6.233-61.344 0-111.25 49.907-111.25 111.25s49.906 111.25 111.25 111.25 111.25-49.907 111.25-111.25c0-12.595-2.097-24.969-6.233-36.778-1.369-3.91-5.648-5.97-9.558-4.6zM359.355 247.803c-12.593 0-24.966 2.097-36.777 6.233-3.909 1.369-5.969 5.648-4.6 9.557 1.368 3.91 5.649 5.968 9.557 4.6 10.215-3.577 20.92-5.39 31.82-5.39 53.072 0 96.25 43.178 96.25 96.25s-43.178 96.25-96.25 96.25-96.25-43.178-96.25-96.25c0-10.9 1.813-21.606 5.39-31.82 1.369-3.909-.69-8.188-4.6-9.557-3.91-1.368-8.188.691-9.557 4.6-4.137 11.812-6.233 24.185-6.233 36.777 0 61.343 49.906 111.25 111.25 111.25s111.25-49.907 111.25-111.25-49.906-111.25-111.25-111.25zM263.896 152.93c3.909-1.369 5.969-5.648 4.6-9.557-3.576-10.214-5.39-20.92-5.39-31.82 0-53.072 43.178-96.25 96.25-96.25s96.25 43.178 96.25 96.25-43.178 96.25-96.25 96.25c-10.901 0-21.607-1.813-31.82-5.39-3.909-1.368-8.188.691-9.557 4.6-1.369 3.91.689 8.188 4.6 9.558 11.81 4.136 24.184 6.233 36.777 6.233 61.344 0 111.25-49.907 111.25-111.25S420.699.303 359.355.303s-111.25 49.907-111.25 111.25c0 12.592 2.097 24.966 6.233 36.777 1.369 3.91 5.649 5.97 9.558 4.6z" />
				<path d="M332.272 363.789c.54 3.094 1.595 6.012 3.08 8.66l-33.426 33.427c-2.929 2.929-2.929 7.678 0 10.606 1.465 1.464 3.385 2.197 5.304 2.197 1.919 0 3.839-.732 5.304-2.197l33.426-33.426c3.967 2.223 8.535 3.497 13.397 3.497 15.163 0 27.5-12.336 27.5-27.5 0-4.862-1.273-9.43-3.496-13.397l33.427-33.427c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-33.427 33.426c-2.649-1.484-5.566-2.54-8.66-3.08l-82.101-82.101c1.448-4.601 2.231-9.493 2.231-14.565 0-5.072-.784-9.965-2.232-14.566l82.101-82.101c3.094-.54 6.011-1.595 8.66-3.08l33.427 33.426c1.465 1.464 3.385 2.197 5.304 2.197 1.919 0 3.839-.732 5.304-2.197 2.929-2.929 2.929-7.678 0-10.606l-33.427-33.427c2.223-3.967 3.496-8.535 3.496-13.397 0-15.164-12.337-27.5-27.5-27.5-4.862 0-9.429 1.273-13.397 3.496l-33.426-33.426c-2.93-2.929-7.678-2.929-10.607 0-2.929 2.929-2.929 7.678 0 10.606l33.426 33.427c-1.484 2.649-2.54 5.566-3.08 8.66l-82.101 82.101c-4.601-1.448-9.493-2.231-14.565-2.231-5.072 0-9.965.784-14.565 2.231l-82.101-82.101c-.54-3.094-1.595-6.011-3.08-8.66l33.427-33.427c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-33.427 33.426c-3.967-2.223-8.535-3.496-13.397-3.496-15.163 0-27.5 12.336-27.5 27.5 0 4.862 1.273 9.43 3.496 13.397l-33.426 33.427c-2.929 2.929-2.929 7.678 0 10.606 1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l33.426-33.426c2.649 1.484 5.567 2.54 8.661 3.08l82.101 82.101c-1.448 4.601-2.232 9.493-2.232 14.566 0 5.072.783 9.964 2.231 14.565l-82.101 82.102c-3.094.54-6.012 1.596-8.661 3.08l-33.426-33.426c-2.929-2.929-7.677-2.929-10.607 0-2.929 2.929-2.929 7.678 0 10.606l33.426 33.427c-2.223 3.967-3.496 8.535-3.496 13.397 0 15.164 12.337 27.5 27.5 27.5 4.862 0 9.43-1.273 13.397-3.497l33.427 33.426c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606l-33.427-33.427c1.484-2.648 2.54-5.565 3.079-8.659l82.101-82.102c4.601 1.448 9.493 2.232 14.566 2.232s9.965-.784 14.566-2.232l82.098 82.1zm27.083-17.236c3.434 0 6.547 1.393 8.809 3.642 2.299 2.311 3.691 5.425 3.691 8.858 0 6.892-5.607 12.5-12.5 12.5-3.434 0-6.547-1.393-8.809-3.642-2.299-2.311-3.691-5.425-3.691-8.858 0-6.893 5.607-12.5 12.5-12.5zm-8.858-243.808c2.311-2.299 5.425-3.691 8.858-3.691 6.893 0 12.5 5.607 12.5 12.5 0 3.434-1.393 6.547-3.642 8.809-2.311 2.299-5.425 3.691-8.858 3.691-6.893 0-12.5-5.607-12.5-12.5 0-3.434 1.393-6.548 3.642-8.809zm-4.539 232.304c-4.438 2.487-8.119 6.167-10.606 10.606l-71.103-71.104c4.057-2.969 7.637-6.549 10.606-10.606l71.103 71.104zm-10.606-210.098c2.487 4.438 6.168 8.119 10.606 10.606l-71.103 71.103c-2.969-4.057-6.549-7.637-10.606-10.606l71.103-71.103zm-223.497-.898c-3.434 0-6.547-1.393-8.809-3.642-2.299-2.311-3.691-5.425-3.691-8.858 0-6.893 5.608-12.5 12.5-12.5 3.434 0 6.547 1.393 8.809 3.642 2.299 2.311 3.691 5.425 3.691 8.858 0 6.893-5.607 12.5-12.5 12.5zm13.398 11.503c4.438-2.487 8.118-6.167 10.605-10.606l71.104 71.104c-4.057 2.969-7.637 6.549-10.606 10.606l-71.103-71.104zm-4.54 232.306c-2.311 2.299-5.425 3.691-8.858 3.691-6.892 0-12.5-5.608-12.5-12.5 0-3.434 1.393-6.547 3.642-8.809 2.311-2.299 5.425-3.691 8.858-3.691 6.893 0 12.5 5.607 12.5 12.5 0 3.434-1.393 6.547-3.642 8.809zm15.146-22.206c-2.487-4.438-6.168-8.119-10.606-10.606l71.103-71.104c2.969 4.057 6.549 7.637 10.606 10.606l-71.103 71.104zm99.746-76.736c-18.536 0-33.616-15.081-33.616-33.617 0-18.537 15.08-33.617 33.616-33.617s33.617 15.081 33.617 33.617-15.081 33.617-33.617 33.617z" />
			</svg>
		</div>
	);
};

export default DroneMarker;
