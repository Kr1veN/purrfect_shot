package purrfectShot;

public class Users {
	
	private long id;
	private String user;
	
	public Users() {}
	
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
	
	@Override
	public String toString() {
		return "Item {id=" + id + ", user=" + user + "]";
	}
}