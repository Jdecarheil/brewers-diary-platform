Springboot emeds an http server allong with the app
Maven group id is domain name backards of resource
Env property injection using @Value(${property.name})
Inversion of control, outsourcing creation of objects to the framework ijnstead  of creating ourseleves, we can then use dependency injection to inject these into other classes
SDpring bean is regular class thats managed by spring

@autowired optional if you only have one constructor

 @Autowired
    public SomeService(SomeOtherService someOtherService){
        this.someOtherService = someOtherService;
    }
	
	Autowiring like above is preffered it is called constructor injection
	
	Can specify scanBasePackages to scan packages outside main package
	
	@Qualifier - if there are more than one ppssible type, say multiple implementations of a interface or inherited class, the qualifier needs to be used to uniquely identiy
	@primary, somilar tyo qualifier, however it defaults to using this one class if qualifier not used
	
	lazy-initialization set in appllication config to true, all beans will only load when needed
	
	Prototype bean - new bean instance for each container instance
	request bean - scoped to http, web only
	session bean - ^
	
	Prototyped beans do not auto destroy, client must manually do this
	@Bean annotation is to use third party client code and pull it in as a class
	
	Spring uses pagination by default with 20 results as default