
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
		if (player == lastUser) {
			return;
		}
		System.out.println(player);
		System.out.println(message);
		sendText(message);
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
}
