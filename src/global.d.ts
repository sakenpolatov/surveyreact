declare global {
	interface Window {
		Telegram: {
			WebApp: WebApp
		}
	}

	interface WebApp {
		initData: string
		initDataUnsafe: WebAppInitData
		version: string
		platform: string
		colorScheme: string
		themeParams: ThemeParams
		isExpanded: boolean
		viewportHeight: number
		viewportStableHeight: number
		headerColor: string
		backgroundColor: string
		bottomBarColor: string
		isClosingConfirmationEnabled: boolean
		isVerticalSwipesEnabled: boolean
		BackButton: BackButton
		MainButton: BottomButton
		SecondaryButton: BottomButton
		SettingsButton: SettingsButton
		HapticFeedback: HapticFeedback
		CloudStorage: CloudStorage
		BiometricManager: BiometricManager
		isVersionAtLeast: (version: string) => boolean
		setHeaderColor: (color: string) => void
		setBackgroundColor: (color: string) => void
		setBottomBarColor: (color: string) => void
		enableClosingConfirmation: () => void
		disableClosingConfirmation: () => void
		enableVerticalSwipes: () => void
		disableVerticalSwipes: () => void
		onEvent: (eventType: string, eventHandler: () => void) => void
		offEvent: (eventType: string, eventHandler: () => void) => void
		sendData: (data: string) => void
		switchInlineQuery: (query: string, chooseChatTypes?: string[]) => void
		openLink: (url: string, options?: { try_instant_view?: boolean }) => void
		openTelegramLink: (url: string) => void
		openInvoice: (url: string, callback?: (status: string) => void) => void
		shareToStory: (media_url: string, params?: StoryShareParams) => void
		showPopup: (
			params: PopupParams,
			callback?: (button_id: string | null) => void
		) => void
		showAlert: (message: string, callback?: () => void) => void
		showConfirm: (
			message: string,
			callback?: (confirmed: boolean) => void
		) => void
		showScanQrPopup: (
			params: ScanQrPopupParams,
			callback?: (data: string) => boolean
		) => void
		closeScanQrPopup: () => void
		readTextFromClipboard: (callback?: (data: string | null) => void) => void
		requestWriteAccess: (
			callback?: (status: 'allowed' | 'cancelled') => void
		) => void
		requestContact: (callback?: (status: 'sent' | 'cancelled') => void) => void
		ready: () => void
		expand: () => void
		close: () => void
	}

	interface WebAppInitData {
		query_id?: string
		user?: WebAppUser
		receiver?: WebAppUser
		chat?: WebAppChat
		chat_type?: string
		chat_instance?: string
		start_param?: string
		can_send_after?: number
		auth_date: number
		hash: string
	}

	interface WebAppUser {
		id: number
		first_name: string
		last_name?: string
		username?: string
		language_code?: string
		is_premium?: boolean
		photo_url?: string
	}

	interface WebAppChat {
		id: number
		type: string
		title?: string
		username?: string
		photo_url?: string
	}

	interface ThemeParams {
		bg_color?: string
		text_color?: string
		hint_color?: string
		link_color?: string
		button_color?: string
		button_text_color?: string
		secondary_bg_color?: string
		header_bg_color?: string
		bottom_bar_bg_color?: string
		accent_text_color?: string
		section_bg_color?: string
		section_header_text_color?: string
		section_separator_color?: string
		subtitle_text_color?: string
		destructive_text_color?: string
	}

	interface BackButton {
		isVisible: boolean
		onClick: (callback: () => void) => void
		offClick: (callback: () => void) => void
		show: () => void
		hide: () => void
	}

	interface BottomButton {
		text: string
		color: string
		textColor: string
		isVisible: boolean
		isActive: boolean
		hasShineEffect?: boolean
		setText: (text: string) => void
		show: () => void
		hide: () => void
		enable: () => void
		disable: () => void
		showProgress: (leaveActive?: boolean) => void
		hideProgress: () => void
	}

	interface SettingsButton {
		isVisible: boolean
		onClick: (callback: () => void) => void
		offClick: (callback: () => void) => void
		show: () => void
		hide: () => void
	}

	interface HapticFeedback {
		impactOccurred: (
			style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
		) => void
		notificationOccurred: (type: 'error' | 'success' | 'warning') => void
		selectionChanged: () => void
	}

	interface CloudStorage {
		setItem: (
			key: string,
			value: string,
			callback?: (error: Error | null, stored?: boolean) => void
		) => void
		getItem: (
			key: string,
			callback: (error: Error | null, value: string) => void
		) => void
		getItems: (
			keys: string[],
			callback: (error: Error | null, values: string[]) => void
		) => void
		removeItem: (
			key: string,
			callback?: (error: Error | null, removed?: boolean) => void
		) => void
		removeItems: (
			keys: string[],
			callback?: (error: Error | null, removed?: boolean) => void
		) => void
		getKeys: (callback: (error: Error | null, keys: string[]) => void) => void
	}

	interface BiometricManager {
		isInited: boolean
		isBiometricAvailable: boolean
		biometricType: 'finger' | 'face' | 'unknown'
		isAccessRequested: boolean
		isAccessGranted: boolean
		isBiometricTokenSaved: boolean
		deviceId: string
		init: (callback?: () => void) => void
		requestAccess: (
			params: BiometricRequestAccessParams,
			callback?: (status: boolean) => void
		) => void
		authenticate: (
			params: BiometricAuthenticateParams,
			callback?: (success: boolean, token?: string) => void
		) => void
		updateBiometricToken: (
			token: string,
			callback?: (updated: boolean) => void
		) => void
		openSettings: () => void
	}

	interface StoryShareParams {
		text?: string
		widget_link?: StoryWidgetLink
	}

	interface StoryWidgetLink {
		url: string
		name?: string
	}

	interface PopupParams {
		title?: string
		message: string
		buttons?: PopupButton[]
	}

	interface PopupButton {
		id?: string
		type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'
		text?: string
	}

	interface ScanQrPopupParams {
		text?: string
	}

	interface BiometricRequestAccessParams {
		reason?: string
	}

	interface BiometricAuthenticateParams {
		reason?: string
	}
}

export {}
