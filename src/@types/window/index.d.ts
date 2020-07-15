interface ITokenData {
    Token: string;
    ExpirationDate: string;
}
interface Window {
	addthis: {
		toolbox: Function;
	};
	ori: {
		tokenService : {
			getToken(): Promise<ITokenData | null>;
		};
	};
}


