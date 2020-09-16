package contrat;

public class SendMail {
	
	private String email;
	private String object;
	private String content;
	
	public SendMail() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public SendMail(String email, String object, String content) {
		super();
		this.email = email;
		this.object = object;
		this.content = content;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getObject() {
		return object;
	}

	public void setObject(String object) {
		this.object = object;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
		
}
