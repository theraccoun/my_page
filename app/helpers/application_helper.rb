module ApplicationHelper

	def full_title(page_title)
		base_title = "smaccoun"
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end

	def addColon(page_title)
	  	if page_title.empty?
	  		""
	  	else
	  		": "
	  	end
  end
end
