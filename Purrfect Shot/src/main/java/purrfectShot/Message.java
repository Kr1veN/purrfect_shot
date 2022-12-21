package purrfectShot;

public class Message {
	
	private long id;
	private String user;
	private String body;
	
	public Message() {}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getUser() {
		return user;
	}
	
	public void setUser(String user) {
		this.user = user;
	}
	
	public String getBody() {
		return body;
	}
	
	public void setBody(String body) {
		this.body = body;
	}
	
	@Override
	public String toString() {
		return "Item {id=" + id + ", user=" + user + ", body=" + body + "]";
	}
}