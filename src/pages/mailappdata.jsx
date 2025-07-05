import face5 from "../assets/images/faces/5.jpg";
import face7 from "../assets/images/faces/7.jpg";
import face10 from "../assets/images/faces/10.jpg";
import face22 from "../assets/images/faces/22.jpg";
import face23 from "../assets/images/faces/23.jpg";


export const Allmailsdata = [
	{ id: 1, icon: 'inbox-archive-line', text1: 'All Mails', text2: '5', class: 'badge bg-success/10 text-success !rounded-full', class1: 'active' },
	{ id: 2, icon: 'inbox-archive-line', text1: 'Inbox', text2: '5', class: 'badge bg-primary/10 text-primary !rounded-full', class1: '' },
	{ id: 3, icon: 'send-plane-2-line', text1: 'Sent', text2: '', class: '', class1: '' },
	{ id: 4, icon: 'draft-line', text1: 'Drafts', text2: '', class: '', class1: '' },
	{ id: 5, icon: 'spam-2-line', text1: 'Drafts', text2: '', class: '', class1: '' },
	{ id: 6, icon: 'bookmark-line', text1: 'Important', text2: '', class: '', class1: '' },
	{ id: 6, icon: 'delete-bin-line', text1: 'Trash', text2: '', class: '', class1: '' },
	{ id: 6, icon: 'archive-line', text1: 'Archive', text2: '', class: '', class1: '' },
	{ id: 6, icon: 'star-line', text1: 'Starred', text2: '', class: '', class1: '' }
]
export const Allmailsdata1 = [
	{
		id: 1,
		checked: '',
		img: face5,
		active: 'online',
		name: 'Sarah L',
		title: "Wrong Item Received – Order #4567",
		time: '1:32PM', icon: 'ri-attachment-2 align-middle text-[0.75rem]', star: '', badge: '', badgetxt: '', bordercls: '',
		breif: "I received my order (#4567), but the contents are incorrect. I ordered a blue wireless headset but received a red one instead.",
	},
	{
		id: 2,
		checked: '',
		img: face7, active: 'online',
		name: 'Chaima Abid',
		title: "Order Not Received – Tracking Stalled (#8923)",
		breif: "I submitted order (#8923) last week, with an expected delivery date of December 14th. However, I haven’t received it yet, and the tracking details haven’t been updated for the past three days.",
		time: '10:27AM', icon: '', star: '', badge: '', badgetxt: '', bordercls: ''
	},
	{
		id: 3,
		checked: '',
		img: face23,
		active: 'offline',
		name: "Riwam Security Team",
		title: "Security Alert – Unusual Activity Detected",
		breif: "We noticed some unusual activity on your account and want to ensure your data remains secure.",
		time: 'Yesterday, 10:27AM',
		icon: '',
		star: '',
		badge: '',
		badgetxt: '',
		bordercls: '!border-t-0'
	},
	{
		id: 4,
		checked: '',
		img: face10,
		active: 'offline',
		name: "Ilyes Samid",
		title: "Inquiry About Product Customization",
		breif: "I like the products on your website and would like to know if you offer customizations. I'm interested in purchasing a leather wallet and would like to have my initials engraved on it.",
		time: '24 Oct, 5:45PM', icon: '', star: '', badge: 'badge bg-primary text-white', badgetxt: 'Social', bordercls: '!border-t-0'
	},
	{
		id: 5,
		checked: '',
		img: face23,
		active: 'offline',
		name: "Riwam Support Team",
		title: "Welcome to RIWAM",
		breif: "Welcome to RIWAM family! We're thrilled to have you with us on our journey to simplify and enhance your work.",
		time: '12 Sep, 11:24AM', icon: '', star: "true", badge: '', badgetxt: '', bordercls: ''
	},
]
