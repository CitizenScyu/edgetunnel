// <!--GAMFC-->version base on commit 43fad05dcdae3b723c53c226f8181fc5bd47223e, time is 2023-06-22 15:20:05 UTC<!--GAMFC-END-->.
// @ts-ignore
import { connect } from 'cloudflare:sockets';

// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
let userID = '90cd4a77-141a-43c9-991b-08263cfe9c10';

let proxyIP = '';// 小白勿动，该地址并不影响你的网速，这是给CF代理使用的。'cdn.xn--b6gac.eu.org', 'cdn-all.xn--b6gac.eu.org', 'edgetunnel.anycast.eu.org'

//let sub = '';// 留空则显示原版内容
let sub = 'sub.cmliussss.workers.dev';// 内置优选订阅生成器，可自行搭建 https://github.com/cmliu/WorkerVless2sub
let subconverter = 'sub.dxdyzh.tk';// clash订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/CitizenScyu/clash-rules/master/DNS.ini&rename=%60Hong%20Kong%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FHong%20Kong%60%7C%60Singapore%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FSingapore%60%7C%60Taiwan%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FTaiwan%60%7C%60Japan%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FJapan%60%7C%60South%20Korea%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FSouth%20Korea%60%7C%60United%20States%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUnited%20States%60%7C%60Australia%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FAustralia%60%7C%60Turkey%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FTurkey%60%7C%60Switzerland%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FSwitzerland%60%7C%60Thailand%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FThailand%60%7C%60Brazil%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FBrazil%60%7C%60Philippines%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FPhilippines%60%7C%60Argentina%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FArgentina%60%7C%60India%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FIndia%60%7C%60Malaysia%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FMalaysia%60%7C%60Pakistan%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FPakistan%60%7C%60Vietnam%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FVietnam%60%7C%60Italy%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FItaly%60%7C%60Ukraine%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUkraine%60%7C%60Dubai%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FDubai%60%7C%60United%20Kingdom%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUnited%20Kingdom%60%7C%60Indonesia%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FIndonesia%60%7C%60Chile%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FChile%60%7C%60Canada%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FCanada%60%7C%60Netherlands%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FNetherlands%60%7C%60France%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FFrance%60%7C%60Germany%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FGermany%60%7C%60Russia%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FRussia%60%7C%60Spain%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FSpain%60%7C%60Iceland%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FIceland%60%7C%60USA%20Seattle%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUSA%20Seattle%60%7C%60USA%20San%20Jose%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUSA%20San%20Jose%60%7C%60USA%20Los%20Angeles%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUSA%20Los%20Angeles%60%7C%60UK%20London%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUK%20London%60%7C%60UK%20Coventry%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FUK%20Coventry%60%7C%60Sweden%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FSweden%60%7C%60Bulgaria%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FBulgaria%60%7C%60Austria%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FAustria%60%7C%60Ireland%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FIreland%60%7C%60Hungary%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FHungary%60%7C%60Korea%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8FKorea%60%7C%60%E9%A6%99%E6%B8%AF%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E9%A6%99%E6%B8%AF%60%7C%60%E6%96%B0%E5%8A%A0%E5%9D%A1%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%96%B0%E5%8A%A0%E5%9D%A1%60%7C%60%E6%97%A5%E6%9C%AC%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%97%A5%E6%9C%AC%60%7C%60%E7%BE%8E%E5%9B%BD%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E7%BE%8E%E5%9B%BD%60%7C%60%E5%8F%B0%E6%B9%BE%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%8F%B0%E6%B9%BE%60%7C%60%E8%8F%B2%E5%BE%8B%E5%AE%BE%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E8%8F%B2%E5%BE%8B%E5%AE%BE%60%7C%60%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%60%7C%60%E5%8D%B0%E5%BA%A6%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%8D%B0%E5%BA%A6%60%7C%60%E5%8D%B0%E5%B0%BC%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%8D%B0%E5%B0%BC%60%7C%60%E6%B3%B0%E5%9B%BD%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%B3%B0%E5%9B%BD%60%7C%60%E8%B6%8A%E5%8D%97%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E8%B6%8A%E5%8D%97%60%7C%60%E8%8B%B1%E5%9B%BD%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E8%8B%B1%E5%9B%BD%60%7C%60%E4%B9%8C%E5%85%8B%E5%85%B0%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E4%B9%8C%E5%85%8B%E5%85%B0%60%7C%60%E5%9C%9F%E8%80%B3%E5%85%B6%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%9C%9F%E8%80%B3%E5%85%B6%60%7C%60%E5%BE%B7%E5%9B%BD%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%BE%B7%E5%9B%BD%60%7C%60%E4%BF%84%E7%BD%97%E6%96%AF%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E4%BF%84%E7%BD%97%E6%96%AF%60%7C%60%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%60%7C%E6%B2%99%E7%89%B9%E9%98%BF%E6%8B%89%E4%BC%AF%60%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%B2%99%E7%89%B9%E9%98%BF%E6%8B%89%E4%BC%AF%60%7C%60%E5%B0%BC%E6%97%A5%E5%88%A9%E4%BA%9A%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%B0%BC%E6%97%A5%E5%88%A9%E4%BA%9A%60%7C%60%E5%9F%83%E5%8F%8A%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%9F%83%E5%8F%8A%60%7C%60%E5%A2%A8%E8%A5%BF%E5%93%A5%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%A2%A8%E8%A5%BF%E5%93%A5%60%7C%60%E5%B7%B4%E8%A5%BF%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%B7%B4%E8%A5%BF%60%7C%60%E9%98%BF%E6%A0%B9%E5%BB%B7%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E9%98%BF%E6%A0%B9%E5%BB%B7%60%7C%60%E8%8D%B7%E5%85%B0%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E8%8D%B7%E5%85%B0%60%7C%60%E5%8A%A0%E6%8B%BF%E5%A4%A7%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E5%8A%A0%E6%8B%BF%E5%A4%A7%60%7C%60%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%60%7C%60%E6%96%B0%E8%A5%BF%E5%85%B0%40%E5%A4%A7%E8%B1%A1%E2%98%81%EF%B8%8F%E6%96%B0%E8%A5%BF%E5%85%B0%60"; //订阅配置文件
// The user name and password do not contain special characters
// Setting the address will ignore proxyIP
// Example:  user:pass@host:port  or  host:port
let socks5Address = '';
let RproxyIP = 'false';
if (!isValidUUID(userID)) {
	throw new Error('uuid is not valid');
}

let parsedSocks5Address = {}; 
let enableSocks = false;

export default {
	/**
	 * @param {import("@cloudflare/workers-types").Request} request
	 * @param {{UUID: string, PROXYIP: string}} env
	 * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		try {
			const userAgent = request.headers.get('User-Agent').toLowerCase();
			userID = env.UUID || userID;
			proxyIP = env.PROXYIP || proxyIP;
			socks5Address = env.SOCKS5 || socks5Address;
			sub = env.SUB || sub;
			subconverter = env.SUBAPI || subconverter;
			subconfig = env.SUBCONFIG || subconfig;
			//RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
			if (socks5Address) {
				RproxyIP = env.RPROXYIP || 'false';
				try {
					parsedSocks5Address = socks5AddressParser(socks5Address);
					enableSocks = true;
				} catch (err) {
  			/** @type {Error} */ let e = err;
					console.log(e.toString());
					enableSocks = false;
				}
			} else {
				RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
			}
			const upgradeHeader = request.headers.get('Upgrade');
			const url = new URL(request.url);
			if (!upgradeHeader || upgradeHeader !== 'websocket') {
				// const url = new URL(request.url);
				switch (url.pathname) {
				case '/':
					return new Response(JSON.stringify(request.cf), { status: 200 });
				case `/${userID}`: {
					const vlessConfig = await getVLESSConfig(userID, request.headers.get('Host'), sub, userAgent, RproxyIP);
					return new Response(`${vlessConfig}`, {
					status: 200,
					headers: {
						"Content-Type": "text/plain;charset=utf-8",
					}
					});
				}
				default:
					return new Response('Not found', { status: 404 });
				}
			} else {
				if (new RegExp('/proxyip=', 'i').test(url.pathname)) proxyIP = url.pathname.split("=")[1];
				else if (new RegExp('/proxyip.', 'i').test(url.pathname)) proxyIP = url.pathname.split("/proxyip.")[1];
				return await vlessOverWSHandler(request);
			}
		} catch (err) {
			/** @type {Error} */ let e = err;
			return new Response(e.toString());
		}
	},
};




/**
 * 
 * @param {import("@cloudflare/workers-types").Request} request
 */
async function vlessOverWSHandler(request) {

	/** @type {import("@cloudflare/workers-types").WebSocket[]} */
	// @ts-ignore
	const webSocketPair = new WebSocketPair();
	const [client, webSocket] = Object.values(webSocketPair);

	webSocket.accept();

	let address = '';
	let portWithRandomLog = '';
	const log = (/** @type {string} */ info, /** @type {string | undefined} */ event) => {
		console.log(`[${address}:${portWithRandomLog}] ${info}`, event || '');
	};
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';

	const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

	/** @type {{ value: import("@cloudflare/workers-types").Socket | null}}*/
	let remoteSocketWapper = {
		value: null,
	};
	let isDns = false;

	// ws --> remote
	readableWebSocketStream.pipeTo(new WritableStream({
		async write(chunk, controller) {
			if (isDns) {
				return await handleDNSQuery(chunk, webSocket, null, log);
			}
			if (remoteSocketWapper.value) {
				const writer = remoteSocketWapper.value.writable.getWriter()
				await writer.write(chunk);
				writer.releaseLock();
				return;
			}

			const {
				hasError,
				message,
				addressType,
				portRemote = 443,
				addressRemote = '',
				rawDataIndex,
				vlessVersion = new Uint8Array([0, 0]),
				isUDP,
			} = processVlessHeader(chunk, userID);
			address = addressRemote;
			portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? 'udp ' : 'tcp '
				} `;
			if (hasError) {
				// controller.error(message);
				throw new Error(message); // cf seems has bug, controller.error will not end stream
				// webSocket.close(1000, message);
				return;
			}
			// if UDP but port not DNS port, close it
			if (isUDP) {
				if (portRemote === 53) {
					isDns = true;
				} else {
					// controller.error('UDP proxy only enable for DNS which is port 53');
					throw new Error('UDP proxy only enable for DNS which is port 53'); // cf seems has bug, controller.error will not end stream
					return;
				}
			}
			// ["version", "附加信息长度 N"]
			const vlessResponseHeader = new Uint8Array([vlessVersion[0], 0]);
			const rawClientData = chunk.slice(rawDataIndex);

			if (isDns) {
				return handleDNSQuery(rawClientData, webSocket, vlessResponseHeader, log);
			}
			handleTCPOutBound(remoteSocketWapper, addressType, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log);
		},
		close() {
			log(`readableWebSocketStream is close`);
		},
		abort(reason) {
			log(`readableWebSocketStream is abort`, JSON.stringify(reason));
		},
	})).catch((err) => {
		log('readableWebSocketStream pipeTo error', err);
	});

	return new Response(null, {
		status: 101,
		// @ts-ignore
		webSocket: client,
	});
}

/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket
 * @param {number} addressType The remote address type to connect to.
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} vlessResponseHeader The VLESS response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
async function handleTCPOutBound(remoteSocket, addressType, addressRemote, portRemote, rawClientData, webSocket, vlessResponseHeader, log,) {
	async function connectAndWrite(address, port, socks = false) {
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = socks ? await socks5Connect(addressType, address, port, log)
			: connect({
				hostname: address,
				port: port,
			});
		remoteSocket.value = tcpSocket;
		log(`connected to ${address}:${port}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(rawClientData); // first write, normal is tls client hello
		writer.releaseLock();
		return tcpSocket;
	}

	// if the cf connect tcp socket have no incoming data, we retry to redirect ip
	async function retry() {
		if (enableSocks) {
			tcpSocket = await connectAndWrite(addressRemote, portRemote, true);
		} else {
			tcpSocket = await connectAndWrite(proxyIP || addressRemote, portRemote);
		}
		// no matter retry success or not, close websocket
		tcpSocket.closed.catch(error => {
			console.log('retry tcpSocket closed error', error);
		}).finally(() => {
			safeCloseWebSocket(webSocket);
		})
		remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, null, log);
	}

	let tcpSocket = await connectAndWrite(addressRemote, portRemote);

	// when remoteSocket is ready, pass to websocket
	// remote--> ws
	remoteSocketToWS(tcpSocket, webSocket, vlessResponseHeader, retry, log);
}

/**
 * 
 * @param {import("@cloudflare/workers-types").WebSocket} webSocketServer
 * @param {string} earlyDataHeader for ws 0rtt
 * @param {(info: string)=> void} log for ws 0rtt
 */
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	let readableStreamCancel = false;
	const stream = new ReadableStream({
		start(controller) {
			webSocketServer.addEventListener('message', (event) => {
				if (readableStreamCancel) {
					return;
				}
				const message = event.data;
				controller.enqueue(message);
			});

			// The event means that the client closed the client -> server stream.
			// However, the server -> client stream is still open until you call close() on the server side.
			// The WebSocket protocol says that a separate close message must be sent in each direction to fully close the socket.
			webSocketServer.addEventListener('close', () => {
				// client send close, need close server
				// if stream is cancel, skip controller.close
				safeCloseWebSocket(webSocketServer);
				if (readableStreamCancel) {
					return;
				}
				controller.close();
			}
			);
			webSocketServer.addEventListener('error', (err) => {
				log('webSocketServer has error');
				controller.error(err);
			}
			);
			// for ws 0rtt
			const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},

		pull(controller) {
			// if ws can stop read if stream is full, we can implement backpressure
			// https://streams.spec.whatwg.org/#example-rs-push-backpressure
		},
		cancel(reason) {
			// 1. pipe WritableStream has error, this cancel will called, so ws handle server close into here
			// 2. if readableStream is cancel, all controller.close/enqueue need skip,
			// 3. but from testing controller.error still work even if readableStream is cancel
			if (readableStreamCancel) {
				return;
			}
			log(`ReadableStream was canceled, due to ${reason}`)
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});

	return stream;

}

// https://xtls.github.io/development/protocols/vless.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 * 
 * @param { ArrayBuffer} vlessBuffer 
 * @param {string} userID 
 * @returns 
 */
function processVlessHeader(
	vlessBuffer,
	userID
) {
	if (vlessBuffer.byteLength < 24) {
		return {
			hasError: true,
			message: 'invalid data',
		};
	}
	const version = new Uint8Array(vlessBuffer.slice(0, 1));
	let isValidUser = false;
	let isUDP = false;
	if (stringify(new Uint8Array(vlessBuffer.slice(1, 17))) === userID) {
		isValidUser = true;
	}
	if (!isValidUser) {
		return {
			hasError: true,
			message: 'invalid user',
		};
	}

	const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
	//skip opt for now

	const command = new Uint8Array(
		vlessBuffer.slice(18 + optLength, 18 + optLength + 1)
	)[0];

	// 0x01 TCP
	// 0x02 UDP
	// 0x03 MUX
	if (command === 1) {
	} else if (command === 2) {
		isUDP = true;
	} else {
		return {
			hasError: true,
			message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`,
		};
	}
	const portIndex = 18 + optLength + 1;
	const portBuffer = vlessBuffer.slice(portIndex, portIndex + 2);
	// port is big-Endian in raw data etc 80 == 0x005d
	const portRemote = new DataView(portBuffer).getUint16(0);

	let addressIndex = portIndex + 2;
	const addressBuffer = new Uint8Array(
		vlessBuffer.slice(addressIndex, addressIndex + 1)
	);

	// 1--> ipv4  addressLength =4
	// 2--> domain name addressLength=addressBuffer[1]
	// 3--> ipv6  addressLength =16
	const addressType = addressBuffer[0];
	let addressLength = 0;
	let addressValueIndex = addressIndex + 1;
	let addressValue = '';
	switch (addressType) {
		case 1:
			addressLength = 4;
			addressValue = new Uint8Array(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			).join('.');
			break;
		case 2:
			addressLength = new Uint8Array(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + 1)
			)[0];
			addressValueIndex += 1;
			addressValue = new TextDecoder().decode(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			break;
		case 3:
			addressLength = 16;
			const dataView = new DataView(
				vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)
			);
			// 2001:0db8:85a3:0000:0000:8a2e:0370:7334
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				ipv6.push(dataView.getUint16(i * 2).toString(16));
			}
			addressValue = ipv6.join(':');
			// seems no need add [] for ipv6
			break;
		default:
			return {
				hasError: true,
				message: `invild  addressType is ${addressType}`,
			};
	}
	if (!addressValue) {
		return {
			hasError: true,
			message: `addressValue is empty, addressType is ${addressType}`,
		};
	}

	return {
		hasError: false,
		addressRemote: addressValue,
		addressType,
		portRemote,
		rawDataIndex: addressValueIndex + addressLength,
		vlessVersion: version,
		isUDP,
	};
}


/**
 * 
 * @param {import("@cloudflare/workers-types").Socket} remoteSocket 
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket 
 * @param {ArrayBuffer} vlessResponseHeader 
 * @param {(() => Promise<void>) | null} retry
 * @param {*} log 
 */
async function remoteSocketToWS(remoteSocket, webSocket, vlessResponseHeader, retry, log) {
	// remote--> ws
	let remoteChunkCount = 0;
	let chunks = [];
	/** @type {ArrayBuffer | null} */
	let vlessHeader = vlessResponseHeader;
	let hasIncomingData = false; // check if remoteSocket has incoming data
	await remoteSocket.readable
		.pipeTo(
			new WritableStream({
				start() {
				},
				/**
				 * 
				 * @param {Uint8Array} chunk 
				 * @param {*} controller 
				 */
				async write(chunk, controller) {
					hasIncomingData = true;
					// remoteChunkCount++;
					if (webSocket.readyState !== WS_READY_STATE_OPEN) {
						controller.error(
							'webSocket.readyState is not open, maybe close'
						);
					}
					if (vlessHeader) {
						webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
						vlessHeader = null;
					} else {
						// seems no need rate limit this, CF seems fix this??..
						// if (remoteChunkCount > 20000) {
						// 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
						// 	await delay(1);
						// }
						webSocket.send(chunk);
					}
				},
				close() {
					log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
					// safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
				},
				abort(reason) {
					console.error(`remoteConnection!.readable abort`, reason);
				},
			})
		)
		.catch((error) => {
			console.error(
				`remoteSocketToWS has exception `,
				error.stack || error
			);
			safeCloseWebSocket(webSocket);
		});

	// seems is cf connect socket have error,
	// 1. Socket.closed will have error
	// 2. Socket.readable will be close without any data coming
	if (hasIncomingData === false && retry) {
		log(`retry`)
		retry();
	}
}

/**
 * 
 * @param {string} base64Str 
 * @returns 
 */
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { error: null };
	}
	try {
		// go use modified Base64 for URL rfc4648 which js atob not support
		base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
		const decode = atob(base64Str);
		const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { error };
	}
}

/**
 * This is not real UUID validation
 * @param {string} uuid 
 */
function isValidUUID(uuid) {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
}

const WS_READY_STATE_OPEN = 1;
const WS_READY_STATE_CLOSING = 2;
/**
 * Normally, WebSocket will not has exceptions when close.
 * @param {import("@cloudflare/workers-types").WebSocket} socket
 */
function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error('safeCloseWebSocket error', error);
	}
}

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
	byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
	const uuid = unsafeStringify(arr, offset);
	if (!isValidUUID(uuid)) {
		throw TypeError("Stringified UUID is invalid");
	}
	return uuid;
}

/**
 * 
 * @param {ArrayBuffer} udpChunk 
 * @param {import("@cloudflare/workers-types").WebSocket} webSocket 
 * @param {ArrayBuffer} vlessResponseHeader 
 * @param {(string)=> void} log 
 */
async function handleDNSQuery(udpChunk, webSocket, vlessResponseHeader, log) {
	// no matter which DNS server client send, we alwasy use hard code one.
	// beacsue someof DNS server is not support DNS over TCP
	try {
		const dnsServer = '8.8.4.4'; // change to 1.1.1.1 after cf fix connect own ip bug
		const dnsPort = 53;
		/** @type {ArrayBuffer | null} */
		let vlessHeader = vlessResponseHeader;
		/** @type {import("@cloudflare/workers-types").Socket} */
		const tcpSocket = connect({
			hostname: dnsServer,
			port: dnsPort,
		});

		log(`connected to ${dnsServer}:${dnsPort}`);
		const writer = tcpSocket.writable.getWriter();
		await writer.write(udpChunk);
		writer.releaseLock();
		await tcpSocket.readable.pipeTo(new WritableStream({
			async write(chunk) {
				if (webSocket.readyState === WS_READY_STATE_OPEN) {
					if (vlessHeader) {
						webSocket.send(await new Blob([vlessHeader, chunk]).arrayBuffer());
						vlessHeader = null;
					} else {
						webSocket.send(chunk);
					}
				}
			},
			close() {
				log(`dns server(${dnsServer}) tcp is close`);
			},
			abort(reason) {
				console.error(`dns server(${dnsServer}) tcp is abort`, reason);
			},
		}));
	} catch (error) {
		console.error(
			`handleDNSQuery have exception, error: ${error.message}`
		);
	}
}

/**
 * 
 * @param {number} addressType
 * @param {string} addressRemote
 * @param {number} portRemote
 * @param {function} log The logging function.
 */
async function socks5Connect(addressType, addressRemote, portRemote, log) {
	const { username, password, hostname, port } = parsedSocks5Address;
	// Connect to the SOCKS server
	const socket = connect({
		hostname,
		port,
	});

	// Request head format (Worker -> Socks Server):
	// +----+----------+----------+
	// |VER | NMETHODS | METHODS  |
	// +----+----------+----------+
	// | 1  |    1     | 1 to 255 |
	// +----+----------+----------+

	// https://en.wikipedia.org/wiki/SOCKS#SOCKS5
	// For METHODS:
	// 0x00 NO AUTHENTICATION REQUIRED
	// 0x02 USERNAME/PASSWORD https://datatracker.ietf.org/doc/html/rfc1929
	const socksGreeting = new Uint8Array([5, 2, 0, 2]);

	const writer = socket.writable.getWriter();

	await writer.write(socksGreeting);
	log('sent socks greeting');

	const reader = socket.readable.getReader();
	const encoder = new TextEncoder();
	let res = (await reader.read()).value;
	// Response format (Socks Server -> Worker):
	// +----+--------+
	// |VER | METHOD |
	// +----+--------+
	// | 1  |   1    |
	// +----+--------+
	if (res[0] !== 0x05) {
		log(`socks server version error: ${res[0]} expected: 5`);
		return;
	}
	if (res[1] === 0xff) {
		log("no acceptable methods");
		return;
	}

	// if return 0x0502
	if (res[1] === 0x02) {
		log("socks server needs auth");
		if (!username || !password) {
			log("please provide username/password");
			return;
		}
		// +----+------+----------+------+----------+
		// |VER | ULEN |  UNAME   | PLEN |  PASSWD  |
		// +----+------+----------+------+----------+
		// | 1  |  1   | 1 to 255 |  1   | 1 to 255 |
		// +----+------+----------+------+----------+
		const authRequest = new Uint8Array([
			1,
			username.length,
			...encoder.encode(username),
			password.length,
			...encoder.encode(password)
		]);
		await writer.write(authRequest);
		res = (await reader.read()).value;
		// expected 0x0100
		if (res[0] !== 0x01 || res[1] !== 0x00) {
			log("fail to auth socks server");
			return;
		}
	}

	// Request data format (Worker -> Socks Server):
	// +----+-----+-------+------+----------+----------+
	// |VER | CMD |  RSV  | ATYP | DST.ADDR | DST.PORT |
	// +----+-----+-------+------+----------+----------+
	// | 1  |  1  | X'00' |  1   | Variable |    2     |
	// +----+-----+-------+------+----------+----------+
	// ATYP: address type of following address
	// 0x01: IPv4 address
	// 0x03: Domain name
	// 0x04: IPv6 address
	// DST.ADDR: desired destination address
	// DST.PORT: desired destination port in network octet order

	// addressType
	// 1--> ipv4  addressLength =4
	// 2--> domain name
	// 3--> ipv6  addressLength =16
	let DSTADDR;	// DSTADDR = ATYP + DST.ADDR
	switch (addressType) {
		case 1:
			DSTADDR = new Uint8Array(
				[1, ...addressRemote.split('.').map(Number)]
			);
			break;
		case 2:
			DSTADDR = new Uint8Array(
				[3, addressRemote.length, ...encoder.encode(addressRemote)]
			);
			break;
		case 3:
			DSTADDR = new Uint8Array(
				[4, ...addressRemote.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]
			);
			break;
		default:
			log(`invild  addressType is ${addressType}`);
			return;
	}
	const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 0xff]);
	await writer.write(socksRequest);
	log('sent socks request');

	res = (await reader.read()).value;
	// Response format (Socks Server -> Worker):
	//  +----+-----+-------+------+----------+----------+
	// |VER | REP |  RSV  | ATYP | BND.ADDR | BND.PORT |
	// +----+-----+-------+------+----------+----------+
	// | 1  |  1  | X'00' |  1   | Variable |    2     |
	// +----+-----+-------+------+----------+----------+
	if (res[1] === 0x00) {
		log("socks connection opened");
	} else {
		log("fail to open socks connection");
		return;
	}
	writer.releaseLock();
	reader.releaseLock();
	return socket;
}


/**
 * 
 * @param {string} address
 */
function socks5AddressParser(address) {
	let [latter, former] = address.split("@").reverse();
	let username, password, hostname, port;
	if (former) {
		const formers = former.split(":");
		if (formers.length !== 2) {
			throw new Error('Invalid SOCKS address format');
		}
		[username, password] = formers;
	}
	const latters = latter.split(":");
	port = Number(latters.pop());
	if (isNaN(port)) {
		throw new Error('Invalid SOCKS address format');
	}
	hostname = latters.join(":");
	const regex = /^\[.*\]$/;
	if (hostname.includes(":") && !regex.test(hostname)) {
		throw new Error('Invalid SOCKS address format');
	}
	return {
		username,
		password,
		hostname,
		port,
	}
}

/**
 * @param {string} userID
 * @param {string | null} hostName
 * @param {string} sub
 * @param {string} userAgent
 * @returns {Promise<string>}
 */
async function getVLESSConfig(userID, hostName, sub, userAgent, RproxyIP) {
	// 如果sub为空，则显示原始内容
	if (!sub || sub === '') {
		const vlessMain = `vless://${userID}@${hostName}:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}`;
  
		return `
	################################################################
	v2ray
	---------------------------------------------------------------
	${vlessMain}
	---------------------------------------------------------------
	################################################################
	clash-meta
	---------------------------------------------------------------
	- type: vless
	  name: ${hostName}
	  server: ${hostName}
	  port: 443
	  uuid: ${userID}
	  network: ws
	  tls: true
	  udp: false
	  sni: ${hostName}
	  client-fingerprint: chrome
	  ws-opts:
	    path: "/https://t.me/CitizenScyu"
	    headers:
		  host: ${hostName}
	---------------------------------------------------------------
	################################################################
	`;
	} else if (sub && userAgent.includes('mozilla')) {
		const vlessMain = `vless://${userID}@${hostName}:443?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2048#${hostName}`;
	
		return `
	################################################################
	Subscribe / sub 订阅地址, 支持 Base64、clash-meta、sing-box 订阅格式, 您的订阅内容由 ${sub} 提供维护支持, 自动获取ProxyIP: ${RproxyIP}.
	---------------------------------------------------------------
	https://${hostName}/${userID}
	---------------------------------------------------------------
	################################################################
	v2ray
	---------------------------------------------------------------
	${vlessMain}
	---------------------------------------------------------------
	################################################################
	clash-meta
	---------------------------------------------------------------
	- type: vless
	  name: ${hostName}
	  server: ${hostName}
	  port: 443
	  uuid: ${userID}
	  network: ws
	  tls: true
	  udp: false
	  sni: ${hostName}
	  client-fingerprint: chrome
	  ws-opts:
		path: "/https://t.me/CitizenScyu"
		headers:
		  host: ${hostName}
	---------------------------------------------------------------
	################################################################
	telegram 频道
	https://t.me/CitizenScyu
	---------------------------------------------------------------
	################################################################
	`;
	} else if (sub && userAgent.includes('clash')) {
	  // 如果sub不为空且UA为clash，则发起特定请求
	  	if (typeof fetch === 'function') {
			try {
				const response = await fetch(`https://${subconverter}/sub?target=clash&url=https%3A%2F%2F${sub}%2Fsub%3Fhost%3D${hostName}%26uuid%3D${userID}%26edgetunnel%3Dcmliu%26proxyip%3D${RproxyIP}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`);
				const content = await response.text();
				return content;
			} catch (error) {
				console.error('Error fetching content:', error);
				return `Error fetching content: ${error.message}`;
			}
	  	} else {
			return 'Error: fetch is not available in this environment.';//
	  	}
	} else if (sub && userAgent.includes('sing-box') || userAgent.includes('singbox')) {
		// 如果sub不为空且UA为sing-box，则发起特定请求
		if (typeof fetch === 'function') {
			try {
				const response = await fetch(`https://${subconverter}/sub?target=singbox&url=https%3A%2F%2F${sub}%2Fsub%3Fhost%3D${hostName}%26uuid%3D${userID}%26edgetunnel%3Dcmliu%26proxyip%3D${RproxyIP}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`);
				const content = await response.text();
				return content;
			} catch (error) {
				console.error('获取内容时出错:', error);
				return `获取内容时出错: ${error.message}`;
			}
		} else {
			return '错误: 在此环境中不支持 fetch。';
		}
	} else {
	  	// 如果sub不为空且UA，则发起一般请求
	  	if (typeof fetch === 'function') {
			try {
		  		const response = await fetch(`https://${sub}/sub?host=${hostName}&uuid=${userID}&edgetunnel=cmliu&proxyip=${RproxyIP}`);
		  		const content = await response.text();
		  		return content;
			} catch (error) {
		  		console.error('Error fetching content:', error);
		  		return `Error fetching content: ${error.message}`;
			}
	  	} else {
			return 'Error: fetch is not available in this environment.';
	  	}
	}
}
