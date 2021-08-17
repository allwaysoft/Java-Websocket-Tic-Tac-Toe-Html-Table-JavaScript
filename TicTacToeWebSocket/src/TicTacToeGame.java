
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

@ServerEndpoint("/tictactoe")
public class TicTacToeGame {
	private static final Set<TicTacToeGame> GAME_SET = new CopyOnWriteArraySet<>();
	private Session session;
	private String player;
	private static String lastUser;
	private static String b1 = "";
	private static String b2 = "";
	private static String b3 = "";
	private static String b4 = "";
	private static String b5 = "";
	private static String b6 = "";
	private static String b7 = "";
	private static String b8 = "";
	private static String b9 = "";

	@OnOpen
	public void onOpen(Session session) throws IOException {
		System.out.println("Connection from" + session.getId());
		this.session = session;

		System.out.println(GAME_SET.size());
		if (GAME_SET.size() == 0) {
			this.player = "X";
		}
		if (GAME_SET.size() == 1) {
			this.player = "O";
		}
		if (GAME_SET.size() > 1) {
			System.out.println("房间人满");
			session.getBasicRemote().sendText("roomfull");
//            session.close();
		} else {
			GAME_SET.add(this);
			session.getBasicRemote().sendText("player-" + player);
			session.getBasicRemote().sendText("turn-" + "X");
		}
	}

	@OnMessage
	public void onMessage(String message) {
		System.out.println(player);
		System.out.println(message);
		System.out.println(message.indexOf("place"));
		if (message.indexOf("place") != -1) {
			String[] words = message.split("-");
			System.out.println("words[1]=" + words[1]);
			System.out.println("words[2]=" + words[2]);
			System.out.println("GAME_SET.size()=" + GAME_SET.size());

			if (GAME_SET.size() > 1) {
				if ("".equals(getPlayer(words[1]))) {
					place3(words[1], words[2]);
					sendText(message);
					if ("X".equals(words[2])) {
						sendText("turn-" + "O");
					} else {
						sendText("turn-" + "X");
					}
				}
			}
			System.out.println("b1=" + b1);
			System.out.println("b2=" + b2);
			System.out.println("b3=" + b3);
			System.out.println("b4=" + b4);
			System.out.println("b5=" + b5);
			System.out.println("b6=" + b6);
			System.out.println("b7=" + b7);
			System.out.println("b8=" + b8);
			System.out.println("b9=" + b9);

		} else if ("reset".equals(message)) {
			b1 = "";
			b2 = "";
			b3 = "";
			b4 = "";
			b5 = "";
			b6 = "";
			b7 = "";
			b8 = "";
			b9 = "";
			sendText(message);
		} else {
			sendText(message);
		}

	}

	private static void sendText(String msg) {
		for (TicTacToeGame game : GAME_SET) {
			try {
				synchronized (game) {
					game.session.getBasicRemote().sendText(msg);
				}
			} catch (IOException e) {
				GAME_SET.remove(game);
				try {
					game.session.close();
				} catch (IOException e1) {
				}
				sendText(game.player + "已下线");
			}
		}
	}

	@OnClose
	public void onClose(Session session) {
		System.out.println(session.getId());
		GAME_SET.remove(this);
		System.out.println(this.player + "已下线");
		for (TicTacToeGame game : GAME_SET) {
			if (game.player == this.player) {
				sendText(this.player + "已下线");
			}
		}
	}

	public void place3(String id, String player) {
		if ("b1".equals(id)) {
			b1 = player;
		}
		if ("b2".equals(id)) {
			b2 = player;
		}
		if ("b3".equals(id)) {
			b3 = player;
		}
		if ("b4".equals(id)) {
			b4 = player;
		}
		if ("b5".equals(id)) {
			b5 = player;
		}
		if ("b6".equals(id)) {
			b6 = player;
		}
		if ("b7".equals(id)) {
			b7 = player;
		}
		if ("b8".equals(id)) {
			b8 = player;
		}
		if ("b9".equals(id)) {
			b9 = player;
		}
	}

	public String getPlayer(String id) {
		String player = "";
		if ("b1".equals(id)) {
			player = b1;
		}
		if ("b2".equals(id)) {
			player = b2;
		}
		if ("b3".equals(id)) {
			player = b3;
		}
		if ("b4".equals(id)) {
			player = b4;
		}
		if ("b5".equals(id)) {
			player = b5;
		}
		if ("b6".equals(id)) {
			player = b6;
		}
		if ("b7".equals(id)) {
			player = b7;
		}
		if ("b8".equals(id)) {
			player = b8;
		}
		if ("b9".equals(id)) {
			player = b9;
		}
		return player;
	}
}
