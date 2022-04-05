export interface Mission {
	mission_name: string;
	launch_year: string;
	details: string;
	site_name: string;
	launch_site: {
		[key: string]: Launch;
	}
	rocket: {
		[key: string]: Rocket;
	}
	links: {
		[key: string]: Link;
	}
}

export interface Rocket {
	rocket_name: string;
	rocket_type: string;
}

export interface Launch {
	site_name: string;
}

export interface Link {
	article_link: string;
	wikipedia: string;
	video_link: string;
}
